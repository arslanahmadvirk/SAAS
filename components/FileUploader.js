/* eslint-disable @next/next/no-img-element */
import Dropzone from "react-dropzone";

const FileUploader = ({ placeholder, image, ...props }) => {
  return (
    <div className="form-group mb-3">
      <div className="form-control imageupload ">
        <Dropzone {...props}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="imageicon">
                  <img
                    className="w-[200px] h-[200px] rounded-full cursor-pointer mx-auto"
                    src={image}
                    alt="Medium avatar"
                  />
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default FileUploader;
