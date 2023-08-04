import {Transaction,HeaderWrapper, Header, ItemWrapper, ItemInfo } from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
      <div>
        <Transaction className="transaction-history">
          <thead>
            <HeaderWrapper>
              <Header>Type</Header>
              <Header>Amount</Header>
              <Header>Currency</Header>
            </HeaderWrapper>
          </thead>
          <tbody>
          {items.map((item, index) => {
          const { id, type, amount, currency } = item;
          return (
            <ItemWrapper key={id} $even={index % 2 === 0}>
              <ItemInfo>{type}</ItemInfo>
              <ItemInfo>{amount}</ItemInfo>
              <ItemInfo>{currency}</ItemInfo>
            </ItemWrapper>
          );
        })}
          </tbody>
        </Transaction>
      </div>
    );
  };