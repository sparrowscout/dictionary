
import React from "react";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { loadDictionaryFB } from "./redux/modules/dictionary"
import { useDispatch, useSelector } from "react-redux"
import { Route, useHistory, Switch } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import AddWord from './addWord';
import BasicSpeedDial from './speedDial';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const my_dictionary = useSelector((state) => state.dictionary.list);

  React.useEffect(() => {
    dispatch(loadDictionaryFB())
  }, []);

  return (

    <div className="App">
      <Header>
        인터넷 백과사전
      </Header>
      <Switch>
        <Route path="/" exact>

          <CardContainer>

            {my_dictionary.map((list, index) => {
              return <DictCard completed={list.completed} key={index}>
                <CardWord>{list.word}</CardWord>
                <span>의미 또는 출처</span><br />
                <CardWordMean>{list.mean}</CardWordMean>
                <span>사용예시</span><br />
                <CardWordRef>{list.reference}</CardWordRef>
              </DictCard>
            })}

          </CardContainer>

        </Route>

        <Route exact path="/addword" component={AddWord} />
      </Switch>


      <BasicSpeedDial onClick={() => { history.push("/addword") }} />
    </div>
  );
}

const Header = styled.div`
height: 55px;
border-bottom: 1px solid blueviolet;
font-size: 30px;
font-weight: bold;
position: fixed;
top: 0;
left: 0;
right: 0;
background-color: #fff;
padding-top: 20px;
`;

const CardContainer = styled.div`

margin: auto;
justify-content: center;
padding-top: 85px;


`;

const DictCard = styled.div`
width: 300px;
height: 150px;
border: 1px solid blueviolet;
border-radius: 10px;
float: left;
margin: 10px;
padding: 20px;
padding-bottom: 40px;
text-align: left;

span {
  font-size: 14px;
  text-decoration: underline;
}
`;

const CardWord = styled.div`
font-size: 30px;
font-weight: bold;
margin-bottom: 10px;
`;

// const CardWordPron = styled.div`
// font-size: 15px;
// margin-bottom: 10px;
// `;

const CardWordRef = styled.div`
margin-top: 5px;
font-size: 15px;
color: blueviolet;
`;

const CardWordMean = styled.div`
margin-top: 5px;
margin-bottom: 10px;
`;



export default App;
