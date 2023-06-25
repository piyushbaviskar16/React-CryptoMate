import React from 'react';
import { Row, Col, Typography, Space } from 'antd';

const { Text } = Typography;

const Exchanges = () => {
  const exchangesList = [
    {
      rank: 1,
      name: 'Bitcoin (BTC)',
      volume: 1000000,
      numberOfMarkets: 10,
      marketShare: 20,
    },
    {
      rank: 2,
      name: 'Ethereum (ETH)',
      volume: 500000,
      numberOfMarkets: 5,
      marketShare: 10,
    },
    {
      rank: 3,
      name: 'Binance Coin (BNB)',
      volume: 250000,
      numberOfMarkets: 8,
      marketShare: 15,
    },
    {
      rank: 4,
      name: 'Cardano (ADA)',
      volume: 150000,
      numberOfMarkets: 6,
      marketShare: 12,
    },
    {
      rank: 5,
      name: 'XRP (XRP)',
      volume: 200000,
      numberOfMarkets: 7,
      marketShare: 18,
    },
    {
      rank: 6,
      name: 'Solana (SOL)',
      volume: 180000,
      numberOfMarkets: 9,
      marketShare: 16,
    },
    {
      rank: 7,
      name: 'Polkadot (DOT)',
      volume: 220000,
      numberOfMarkets: 4,
      marketShare: 14,
    },
    {
      rank: 8,
      name: 'Dogecoin (DOGE)',
      volume: 120000,
      numberOfMarkets: 3,
      marketShare: 8,
    },
    {
      rank: 9,
      name: 'USD Coin (USDC)',
      volume: 90000,
      numberOfMarkets: 2,
      marketShare: 6,
    },
    {
      rank: 10,
      name: 'Avalanche (AVAX)',
      volume: 80000,
      numberOfMarkets: 5,
      marketShare: 9,
    },
   
  ];

  return (
    <>
      <Row justify="center" gutter={[24, 24]}>
        {exchangesList.map((exchange) => (
          <Col key={exchange.rank} xs={24} sm={12} md={8} lg={6}>
            <div style={{ border: '1px solid #e8e8e8', padding: '16px' }}>
              <Row justify="center">
                <Col span={24}>
                  <Text strong>{exchange.rank}.</Text>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={24}>
                  <Text>{exchange.name}</Text>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={24}>
                  <Text strong>24h Trade Volume: ${exchange.volume}</Text>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={24}>
                  <Text strong>Markets: {exchange.numberOfMarkets}</Text>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={24}>
                  <Text strong>Change: {exchange.marketShare}%</Text>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;






//For that Premium of API Require
// import React from 'react';
// import { Collapse, Row, Col, Typography, Avatar } from 'antd';
// import HTMLReactParser from 'html-react-parser';

// import { useGetExchangesQuery } from '../services/cryptoApi';

// const { Text } = Typography;
// const { Panel } = Collapse;

// const Exchanges = () => {
//   const { data, isFetching } = useGetExchangesQuery();
//   const exchangesList = data?.data?.exchanges;

//   if (isFetching) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <Row>
//         <Col span={6}>Exchanges</Col>
//         <Col span={6}>24h Trade Volume</Col>
//         <Col span={6}>Markets</Col>
//         <Col span={6}>Change</Col>
//       </Row>
//       <Row>
//         {exchangesList?.map((exchange) => (
//           <Col span={24} key={exchange.id}>
//             <Collapse>
//               <Panel
//                 key={exchange.id}
//                 showArrow={false}
//                 header={(
//                   <Row key={exchange.id}>
//                     <Col span={6}>
//                       <Text>
//                         <strong>{exchange.rank}.</strong>
//                       </Text>
//                       <Avatar className="exchange-image" src={exchange.iconUrl} />
//                       <Text>
//                         <strong>{exchange.name}</strong>
//                       </Text>
//                     </Col>
//                     <Col span={6}>${exchange.volume}</Col>
//                     <Col span={6}>{exchange.numberOfMarkets}</Col>
//                     <Col span={6}>{exchange.marketShare}%</Col>
//                   </Row>
//                 )}
//               >
//                 {HTMLReactParser(exchange.description || '')}
//               </Panel>
//             </Collapse>
//           </Col>
//         ))}
//       </Row>
//     </>
//   );
// };

// export default Exchanges;
