import React, { useState } from "react";
import styled from "styled-components";
import CachedIcon from "@material-ui/icons/Cached";
import GetAppSharpIcon from "@material-ui/icons/GetAppSharp";
import { Link } from "react-router-dom";
import BarChartSharpIcon from "@material-ui/icons/BarChartSharp";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const SucessDiv = styled.div`
  width: max-content;
  /* padding: 10px; */
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.status == "sucess" ? "#d9fce9" : "#f7cdcd"};
  color: ${(props) => (props.status == "sucess" ? "green" : "red")};
`;

const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

const DraftMainCard = styled.div`
  padding-left: 20px;
  /* box-shadow: 0px 1px 4px #15223214;
  border-radius: 6px; */
  width: 90%;
  background-color: white;
  table {
    width: 100%;
    /* border: 1px solid black; */
  }
  thead {
    background-color: #eeeeee;
  }

  tr {
  }
  th {
  }
  td {
    /* margin-right: 20px; */
    /* border: 1px solid black; */
    padding-left: 20px;
    border-bottom: 1px solid grey;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 7px;
  border: 2px solid purple;
  color: purple;
  margin-left: 20px;
  background-color: white;
  cursor: pointer;
`;

const SubNav = styled.div`
  height: 20px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  color: grey;
  font-weight: 600;
  :hover {
    border-bottom: 2px solid red;
    color: black;
  }
`;

const DisplayContent = () => {
  const [allData, setAlldata] = useState([
    {
      campaignName: "website promotion landing",
      status: "sucess",
      createdAt: "15 july 2021",
      method: "csv",
    },
    {
      campaignName: "App download",
      status: "failure",
      createdAt: "15 jan 2021",
      method: "csv",
    },
    {
      campaignName: "website design",
      status: "sucess",
      createdAt: "15 july 2020",
      method: "url override",
    },
    {
      campaignName: "social media",
      status: "failure",
      createdAt: "15 july 2021",
      method: "csv",
    },
    {
      campaignName: "New Linkdin templets",
      status: "failure",
      createdAt: "10 april 2021",
      method: "url override",
    },
    {
      campaignName: "New Linkdin templets",
      status: "sucess",
      createdAt: "10 april 2021",
      method: "quick campaign",
    },
    {
      campaignName: "New Linkdin templets",
      status: "failure",
      createdAt: "10 april 2021",
      method: "quick campaign",
    },
    {
      campaignName: "New Linkdin templets",
      status: "sucess",
      createdAt: "10 april 2021",
      method: "quick campaign",
    },
  ]);
  const [filteredData, setFilteredData] = useState([]);
  const [toDisplay, setToDisplay] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);

  const handleFilter = (value) => {
    const result = allData.filter((item) => item.method == value);
    console.log(result);

    setFilteredData(result);
    setToDisplay(true);
    console.log(filteredData);
  };

  return (
    <DraftMainCard>
      <RowWrapper>
        <h2>Campaign</h2>
        <RowWrapper>
          <CachedIcon
            onClick={() => alert("page refreshed")}
            style={{ cursor: "pointer" }}
          />
          <Button onClick={() => alert("create your new campaign here")}>
            + Create a new campaign
          </Button>
        </RowWrapper>
      </RowWrapper>
      <RowWrapper>
        <SubNav>
          <StyledLink onClick={() => setToDisplay(false)}>
            All Campaign
          </StyledLink>
          <StyledLink onClick={() => handleFilter("quick campaign")}>
            quick Campaign
          </StyledLink>
          <StyledLink onClick={() => handleFilter("csv")}>
            csv Campaign
          </StyledLink>
          <StyledLink onClick={() => handleFilter("url override")}>
            url Override Campaign
          </StyledLink>
        </SubNav>
        <RowWrapper>
          <CheckBox type="checkbox" />
          <h5>Show Archived</h5>
        </RowWrapper>
      </RowWrapper>

      <table>
        <thead>
          <tr>
            <th>
              {" "}
              <CheckBox
                type="checkbox"
                onChange={() => setCheckedAll(!checkedAll)}
              />{" "}
              CampaignName
            </th>
            <th>status</th>
            <th>created at</th>
            <th>method</th>
            <th>media</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!toDisplay &&
            allData.map((item, i) => (
              <tr>
                <td>
                  {" "}
                  <CheckBox
                    type="checkbox"
                    checked={checkedAll ? "checked" : undefined}
                  />
                  {item.campaignName}
                </td>
                <td>
                  <SucessDiv status={item.status}>{item.status}</SucessDiv>
                </td>
                <td>{item.createdAt}</td>
                <td>{item.method}</td>
                <td>Video</td>
                <td
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <BarChartSharpIcon />
                  <GetAppSharpIcon
                    onClick={() => alert("download started")}
                    style={{ cursor: "pointer" }}
                  />

                  <FileCopyOutlinedIcon
                    onClick={() => alert("saved to draft")}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          {toDisplay &&
            filteredData.map((item, i) => (
              <tr>
                <td>
                  {" "}
                  <CheckBox
                    type="checkbox"
                    checked={checkedAll ? "checked" : undefined}
                  />
                  {item.campaignName}
                </td>
                <td>
                  <SucessDiv status={item.status}>{item.status}</SucessDiv>
                </td>
                <td>{item.createdAt}</td>
                <td>{item.method}</td>
                <td>Video</td>
                <td
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <BarChartSharpIcon />
                  <GetAppSharpIcon
                    onClick={() => alert("download started")}
                    style={{ cursor: "pointer" }}
                  />

                  <FileCopyOutlinedIcon
                    onClick={() => alert("saved to draft")}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </DraftMainCard>
  );
};

export default DisplayContent;
