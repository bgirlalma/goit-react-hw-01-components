import { StatisticsUser, Title, StatList, Item} from './userStatistics.styled'

export const Statistics = ({ data }) => {
    return (
      <section className="statistics">
        <StatisticsUser>
        <Title className="title">Upload stats</Title>
        <StatList className="stat-list">
          {data.map(({ id, label, percentage }) => (
            <Item className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </Item>
          ))}
        </StatList>
        </StatisticsUser>
      </section>
    );
  };