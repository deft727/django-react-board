import React, { PureComponent , useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { withStyles } from "@material-ui/styles";
import FormData from "form-data";

const axios = require('axios');

const tokens = localStorage.tokens;

//  const handleSubmit = (values) => {
//     let data = new FormData();
//     data.append("image", values.file);
//      // data.append('file[]', values.file, values.file.name,);
//      // data.append('subject', values.subject);
//     console.log("data", data)
//     console.log("values", values.file.name)
//     const REST_API_URL = `http://127.0.0.1:8000/api/account/`;
//     axios.post(REST_API_URL, data, {
//   headers: {
//     'accept': 'application/json',
//     'Accept-Language': 'en-US,en;q=0.8',
//     'Content-Type': `multipart/form-data`,
//     'Authorization': `Token ${tokens}`,
//
//   }
// })
//   .then((response) => {
//       if (response.status===201) {
//           alert("Success");
//             // handleCloseTopic()
//       }
//       else {
//           alert("error");
//           // handleCloseTopic()
//           // window.location.reload();
//         throw new Error('Something went wrong');
//       }
//   });
//   }










const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;

});

const styles = {
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh"
  }
};

class AlertDialogSlide extends PureComponent {
  state = {
    open: false,
    newcropimg: null,
    src: null,
    crop: {
      unit: "%",
      width: 30,
      aspect: 16 / 9
    }
  };



    handleSubmit = (values) => {
        // let data = new FormData();
        // data.append("image", values.file);
         // data.append('file[]', values.file, values.file.name,);
         // data.append('subject', values.subject);
      console.log(this.state.newcropimg)
          let data = new FormData();
          data.append('image', this.state.newcropimg)
        console.log("data", values)
        console.log(localStorage.file)
        // console.log("values", values.file.name)
        const REST_API_URL = `http://127.0.0.1:8000/api/account/`;
        axios.post(REST_API_URL, data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`,
        'Authorization': `Token ${tokens}`,

      }
    })
      .then((response) => {
          if (response.status===201) {
            this.handleClose()
              alert("Success");
                // handleCloseTopic()
          }
          else {
                          this.handleClose()

              alert("error");
              // handleCloseTopic()
              // window.location.reload();
            throw new Error('Something went wrong');
          }
      });
      }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );


    return new Promise((resolve, reject) =>  {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        //
        const file = new File([blob], "filename.jpg")
        //
        const data = new FormData();
        data.append("image", file);

        this.setState({newcropimg: file })
        console.log(file)

        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }




  render() {
    let fileInput = React.createRef();
    const { crop, croppedImageUrl, src } = this.state;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Add Images
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.TransitionComponenthandleClose}
        >

          <DialogTitle>{"Add Images"}</DialogTitle>
          <DialogContent>
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={this.onSelectFile}
              multiple
            />

            {src && (
              <ReactCrop
                src={src}
                crop={crop}
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            )}
            {croppedImageUrl && (
              <img
                alt="Crop"
                style={{ maxWidth: "100%" }}
                src={croppedImageUrl}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              close
            </Button>
            <Button onClick={() => fileInput.current.click()}>
              {src === null ? "Upload Photo" : "Change Photo"}
            </Button>
            {src !== null ? (

              //

              <Button    onClick={()=> this.handleSubmit()}     >
                Save Photo
              </Button>


            //


            ) : null}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;
