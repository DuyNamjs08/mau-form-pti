import React, { useEffect } from "react";
import "./card.scss";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { hidden } from "../../redux/VisibleSlice";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import {NavLink} from 'react-router-dom'

function Card(props) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // useEffect(() => {
  //   window.scroll(0,0)
  // }, []);
  return (
    <div className="card-container">
      <Container className="card-main">
        <div className="card-header">
          <p>
            Báo cáo nhanh tổng hợp tình hình bồi thường theo nghiệp vụ Dơn Vị :
            Admin
          </p>
          <i
            onClick={() => dispatch(hidden(false))}
            className="fa-solid fa-xmark"
          ></i>
        </div>
        <Container className="card-main-contents">
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Từ ngày"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Đến ngày"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã đơn vị"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã NV"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã phòng"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã CB"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã KV"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã NV"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Kiểu KT"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã đại lý"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã kênh"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã DT"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Loại KH"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Nhóm KH"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã KH"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Tổng NV"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Loại tiền"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Tiền từ"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Tiền đến"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã BH"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Tỉ lệ BT đầu"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Tỉ lệ BT cuối "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Nghiệp vụ"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Kiểu BC"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Năm PS từ"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Năm PS đến"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Ngày kì trước "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Đến ngày "
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã TK"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mức độ"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Đến hạn"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Mã SK"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} sm={6} md={6} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Đến hạn SL"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{ background: "#fff" }}
            ></Grid>
            <Grid item xs={12} sm={6} md={3} style={{ background: "#fff" }}>
              <TextField
                size="small"
                fullWidth
                id="outlined-basic"
                label="Kiểu P.cấp"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{ background: "#fff" }}
            ></Grid>
          </Grid>
          <Grid style={{ padding: 0, margin: 0 }} container spacing={2}>
            <Grid item xs={12} md={2} style={{ background: "#fff" }}>
             <NavLink className={(navlink)=>navlink.isActive ? 'link-active' :'' }> Xe cơ giới</NavLink>
            </Grid>
            <Grid item xs={12} md={2} style={{ background: "#fff" }}>
              Con người
            </Grid>
            <Grid item xs={12} md={2} style={{ background: "#fff" }}>
              Tài sản
            </Grid>
            <Grid item xs={12} md={2} style={{ background: "#fff" }}>
              Hàng hóa
            </Grid>
            <Grid item xs={12} md={2} style={{ background: "#fff" }}>
              điều khoản loại trừ
            </Grid>
            <Grid item xs={12} md={2} style={{ background: "#fff" }}>
              số liệu tự động
            </Grid>
          </Grid>
          <Grid
            style={{
              padding: 0,
              marginTop: 20,
              marginBottom: 40,
              display: "flex",
              justifyContent: "center",
            }}
            container
            spacing={2}
          >
            <Button variant="contained">
              <i
                style={{ marginRight: 8 }}
                className="fa-regular fa-pen-to-square"
              ></i>
                Xem trước
            </Button>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default Card;
