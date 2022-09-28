import { useState } from "react";

import {
  generateClassName,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Badge,
  StylesProvider,
  getTheme,
  Button,
  ButtonVariants,
  Icons,
  Pagination,
  DateTimePicker,
  MuiPickersUtilsProvider,
  MomentUtils,
} from "@test/common";

export default function Root(props) {
  enum ThemeType {
    dark = "dark",
    light = "light",
  }

  const [theme, setTheme] = useState(ThemeType.dark);

  const toggleThemeHandler = () => {
    theme === ThemeType.light
      ? setTheme(ThemeType.dark)
      : setTheme(ThemeType.light);
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={createTheme(getTheme(theme))}>
        <CssBaseline />
        <section>
          <br />
          <br />
          <div>
            <h3>Badge from @material-ui/core </h3>{" "}
            <Badge
              badgeContent={50}
              color="primary"
              max={1000}
              overlap="circular"
              showZero
              style={{ marginLeft: "1rem" }}
            />
          </div>
          <br />
          <h3> @melfore/mosaic btns </h3>
          <Button
            onClick={toggleThemeHandler}
            variant={ButtonVariants.outlined}
            label="Toggle theme"
          />
          <br />
          <br />
          <Button
            dataCy="filter-box-save"
            icon={{ name: Icons.check }}
            label="Toggle theme"
            onClick={toggleThemeHandler}
          />
        </section>
        <br />
        <br />
        <h3>Pagination from @material-ui/lab</h3> <Pagination></Pagination>
        <br />
        <br />
        <h3>DateTimePicker from @material-ui/pickers</h3>
        <br />
        <br />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker
            autoOk
            disableFuture
            inputVariant="outlined"
            label="To"
            showTodayButton
            value={50}
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}
