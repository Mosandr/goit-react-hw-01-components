import React from "react";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Friendlist from "./components/FriedsList/FriendsList";
import Transactions from "./components/Transactions/Transactions";

import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statisticalData} />
      <Friendlist friendsList={friends} />
      <Transactions items={transactions} />
    </Container>
  );
};

export default App;
