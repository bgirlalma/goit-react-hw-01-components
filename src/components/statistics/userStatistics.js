import { StatisticsUser, StatList, Item, Title} from './userStatistics.styled'

const generateRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
export const Statistics = ({ title, data }) => {
    return (
      <section className="statistics">
        <StatisticsUser>
        {title && <Title>{title}</Title>}
        <StatList className="stat-list">
          {data.map(({ id, label, percentage }) => (
            <Item className="item" key={id} bgсolor={generateRandomColor()}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </Item>
          ))}
        </StatList>
        </StatisticsUser>
      </section>
    );
  };