import React from "react";
import ReactDOM from "react-dom";
import { Card, Icon } from "semantic-ui-react";
import "./styles.css";
import styled from "styled-components";
import Select from "react-select";
import options from "./data.json";

const StyledDiv = styled.div`
  padding: 2rem;
`;

function Selector(props) {
  const [selectedValue, updateSelectedValue] = React.useState({});
  const [ArraySelectedValue, updateArraySelectedValue] = React.useState([]);

  return (
    <StyledDiv>
      <Select
        onChange={value => {
          //updateSelectedValue(value);
          if (!ArraySelectedValue.includes(value)) {
            updateArraySelectedValue([...ArraySelectedValue, value]);
          }
        }}
        options={props.options}
      />
      <Card.Group style={{ padding: "1rem" }}>
        {ArraySelectedValue.map(v => {
          return (
            <Card key={v.value}>
              <Card.Content>
                <Icon
                  onClick={() => {
                    updateArraySelectedValue(
                      ArraySelectedValue.filter(arrayValue => {
                        return arrayValue !== v;
                      })
                    );
                  }}
                  style={{ float: "right" }}
                  name="delete"
                />
                <Card.Header>{v.label}</Card.Header>
                <Card.Meta>{v.extra.key}</Card.Meta>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </StyledDiv>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Selector options={options} />, rootElement);
