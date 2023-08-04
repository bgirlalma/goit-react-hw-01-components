import { StatisticsUser, Title, StatList, Item} from './userStatistics.styled'

const generateRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
export const Statistics = ({ data }) => {
    return (
      <section className="statistics">
        <StatisticsUser>
        <Title className="title">Upload stats</Title>
        <StatList className="stat-list">
          {data.map(({ id, label, percentage }) => (
            <Item className="item" key={id} bgColor={generateRandomColor()}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </Item>
          ))}
        </StatList>
        </StatisticsUser>
      </section>
    );
  };