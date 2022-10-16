import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./home.scss";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { visible } from "../../redux/VisibleSlice";
import { DataJson } from "../../data/Data";

function Home(props) {
  const dispatch = useDispatch();
  const [dataSelect1, setDataSelect1] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  // ===========================
  const [dataSelect2, setDataSelect2] = useState(null);
  const [contract, setContact] = useState("");
  const [id2, setId2] = useState("");
  const [name2, setName2] = useState("");
  // =============================
  const [dataSelect3, setDataSelect3] = useState(null);
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setDataSelect1(event.target.value);
    setName(event.target.value);
  };
  const handleChange2 = (event) => {
    setContact(event.target.value);
    setName2(event.target.value);
  };
  const handleChange3 = (event) => {
    setCategory(event.target.value);
    // setName2(event.target.value);
  };
  const checkOut = (id) => {
    setId(id);
    setContact("");
    setCategory("");
  };
  const checkOut2 = (id) => {
    setId2(id);
    setCategory("");
  };
  useEffect(() => {
    setDataSelect2(null);
    if (id) {
      setDataSelect2(DataJson[id][name]);
    }
    setDataSelect3(null);
  }, [id]);
  useEffect(() => {
    console.log("id2", id2);
    console.log("name2", name2);
    if (id2) {
      setDataSelect3(dataSelect2[id2][name2]);
    }
  }, [id2]);

  console.log("dataSelect2", dataSelect2);
  console.log("name", name);
  console.log("id", id);
  console.log("dataSelect3", dataSelect3);
  return (
    <div className="home-container">
      <Container>
        <h2 style={{ padding: "20px 0 " }}>Báo cáo nghiệp vụ bảo hiểm</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ minWidth: 160, display: "flex", alignItems: "center" }}>
              {/* <span style={{ width: 80 }}>Liệt kê :</span> */}
              <FormControl
                fullWidth
                style={{ background: "#fff" }}
                size="small "
              >
                <InputLabel size="small" id="demo-simple-select-label">
                  Liệt kê
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={dataSelect1}
                  label="Liệt kê"
                  onChange={handleChange}
                  size="small"
                >
                  {DataJson.map((item) => {
                    return (
                      <MenuItem
                        key={item.name}
                        value={item.name}
                        onClick={() => checkOut(item.id)}
                      >
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth style={{ background: "#fff" }}>
              <InputLabel size="small" id="demo-simple-select-label">
                Contact
              </InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={contract}
                label="Contact"
                onChange={handleChange2}
              >
                {dataSelect2 ? (
                  dataSelect2.map((item) => {
                    return (
                      <MenuItem
                        onClick={() => checkOut2(item.id)}
                        key={item.id}
                        value={item.ten_hop_dong}
                      >
                        {item?.ten_hop_dong}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem value={20}>Twenty</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ minWidth: 160, display: "flex", alignItems: "center" }}>
              {/* <span style={{ width: 80 }}>Tìm BC :</span> */}
              <FormControl fullWidth style={{ background: "#fff" }}>
                <InputLabel size="small" id="demo-simple-select-label">
                  Tìm BC
                </InputLabel>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Tìm BC"
                  onChange={handleChange3}
                >
                  {dataSelect3 ? (
                    dataSelect3.map((item) => {
                      return (
                        <MenuItem key={item.id} value={30}>
                          {item?.category}
                        </MenuItem>
                      );
                    })
                  ) : (
                    <MenuItem value={30}>Thirty</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container style={{ marginTop: "30px" }}>
        <Grid container>
          <Grid item xs={12} sm={8} md={8} style={{ background: "#fff" }}>
            {dataSelect2 ? (
              dataSelect2.map((item) => {
                return (
                  <Grid container key={item.id}>
                    <Grid item xs={12} style={{ background: "#fff" }}>
                      <Typography gutterBottom>{item.ten_hop_dong}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ background: "#fff" }}>
                      <Typography gutterBottom>{item.loai_hop_dong}</Typography>
                    </Grid>
                  </Grid>
                );
              })
            ) : (
              <Typography gutterBottom>loading...</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={4} md={4} style={{ background: "#fff" }}>
            {dataSelect3 ? (
              dataSelect3.map((item) => {
                return (
                  <Grid container key={item.id}>
                    <Grid item xs={12} style={{ background: "#fff" }}>
                      <Typography gutterBottom>{item.style}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ background: "#fff" }}>
                      <Typography gutterBottom>{item.price}</Typography>
                    </Grid>
                  </Grid>
                );
              })
            ) : (
              <Typography gutterBottom>loading...</Typography>
            )}
            <Typography variant="body1">Miêu Tả</Typography>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: "100%", height: 200, padding: "10px 20px" }}
            />
            <Stack
              spacing={2}
              direction="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                style={{ display: "flex", alignItems: "center" }}
                variant="contained"
                onClick={() => dispatch(visible(true))}
              > 
                <i
                  style={{ marginRight: 8 }}
                  className="fa-regular fa-pen-to-square"
                ></i>
                Chọn xem
              </Button>
              <Button
                style={{ display: "flex", alignItems: "center" }}
                variant="contained"
                color="error"
              >
                <i
                  style={{ marginRight: 8 }}
                  className="fa-regular fa-envelope"
                ></i>
                Góp ý
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
