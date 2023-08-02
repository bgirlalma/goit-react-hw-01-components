export const ActivePage = ({items}) => {
 return <ul>{items.map(item =>
 <li key={item.stats}>
    <h2>{item.stats.followers}</h2>
    <p>{item.views}</p>
    <p>{item.likes}</p>  
</li>)}
</ul>
}