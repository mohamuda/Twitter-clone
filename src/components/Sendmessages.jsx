import React from "react";
import { Button } from "@mui/material";

export default function Sendmessages() {
  return (
    <div className="Sendmessages">
      <div className="sendmessage__contianer">
        <h2>Select a message</h2>
        <p>
          Choose from your existing conversations, start a new one, or just keep
          swimming.
        </p>
        <Button variant="outlined" className="messages__tweet" fullWidth>
          New message
        </Button>
      </div>
    </div>
  );
}
