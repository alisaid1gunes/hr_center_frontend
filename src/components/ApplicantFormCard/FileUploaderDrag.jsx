import React from "react";
import Box from "@mui/material/Box";
import { FileUploader } from "react-drag-drop-files";

const FileUploaderDrag = (props) => {
  const { handleChange } = props;
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        width: "100%",
      }}
    >
      <FileUploader
        classes="file-uploader"
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={["pdf"]}
      />
    </Box>
  );
};

export default FileUploaderDrag;
