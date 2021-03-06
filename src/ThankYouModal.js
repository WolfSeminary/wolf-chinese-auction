import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Modal } from "@mui/material";

export default function ThankYouModal(props) {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
  return (
    <Modal
      dir="rtl"
      onClose={() => props.onCloseModal(userFirstName, userLastName)}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        תזכו למצוות!
      </Typography>
      <Typography id="server-modal-description" sx={{ pt: 2 }}>
        יישר כוח על השתתפותכם בהחזקת מפעל הבית של סמינר וולף
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        על מנת לשמור את נתוניך לצורך עריכת ההגרלות, נא הזן את הפרטים הבאים
      </Typography>
      <CacheProvider value={cacheRtl}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="שם פרטי"
            variant="outlined"
            value={userFirstName}
          />
          <TextField
            id="outlined-basic"
            label="שם משפחה"
            variant="outlined"
            value={userLastName}
          />
        </Box>
      </CacheProvider>
    </Modal>
  );
}
