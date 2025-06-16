import { useEffect, useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Typography, CircularProgress, Alert, Tabs, Tab, Box } from '@mui/material';

const MLB_API_URL = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2025&standingsTypes=regularSeason';

const divisionNames = [
  { key: 'AL East', label: 'AL 동부' },
  { key: 'AL Central', label: 'AL 중부' },
  { key: 'AL West', label: 'AL 서부' },
  { key: 'NL East', label: 'NL 동부' },
  { key: 'NL Central', label: 'NL 중부' },
  { key: 'NL West', label: 'NL 서부' },
];

export function MLBStandings2025Chart() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    fetch(MLB_API_URL)
      .then(res => res.json())
      .then(json => {
        console.log('MLB API raw:', json);
        const records = json.records.flatMap((rec: any) =>
          rec.teamRecords.map((team: any) => ({
            team: team.team.name,
            wins: team.wins,
            losses: team.losses,
            pct: Number(team.winningPercentage),
            division: rec.division.name,
            league: rec.league.name,
          }))
        );
        setData(records);
        setLoading(false);
      })
      .catch(_ => {
        setError('MLB API 데이터를 불러오지 못했습니다.');
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  // 각 지구별 데이터 필터링
  const getDivisionData = (divKey: string) => {
    const [league, division] = divKey.split(' ');
    return data.filter(
      d =>
        typeof d.division === 'string' &&
        typeof d.league === 'string' &&
        d.division.toLowerCase().includes(division.toLowerCase()) &&
        d.league.toLowerCase().includes(league === 'AL' ? 'american' : 'national')
    );
  };

  const divisionData = getDivisionData(divisionNames[tab].key);
  const lastUpdated = data.length > 0 ? new Date().toLocaleString() : null;

  return (
    <div style={{ background: '#484f54', padding: 24, borderRadius: 8, marginBottom: 32 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>2025 MLB 팀 순위 (실시간, REST API)</Typography>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        {divisionNames.map((div, _) => (
          <Tab key={div.key} label={div.label} />
        ))}
      </Tabs>
      <Box>
        {divisionData.length === 0 ? (
          <Alert severity="info" sx={{ mt: 4, mb: 4 }}>
            해당 지구의 데이터를 불러올 수 없습니다.<br />
            MLB API의 데이터가 아직 업데이트되지 않았거나, 일시적으로 제공되지 않을 수 있습니다.
          </Alert>
        ) : (
          <>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={divisionData} layout="vertical" margin={{ left: 40, right: 20, top: 20, bottom: 20 }} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="team" type="category" width={120} />
                <Tooltip formatter={v => v + '승'} />
                <Bar dataKey="wins" fill="#1976d2" name="승리" />
                <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
              </BarChart>
            </ResponsiveContainer>
            <Box sx={{ mt: 2, color: '#bbb', fontSize: 14 }}>
              팀 수: {divisionData.length}개
              {lastUpdated && <span style={{ marginLeft: 16 }}>최종 업데이트: {lastUpdated}</span>}
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}

export default MLBStandings2025Chart; 