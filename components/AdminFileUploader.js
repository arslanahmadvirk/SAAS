/* eslint-disable @next/next/no-img-element */
import Dropzone from "react-dropzone";

const AdminFileUploader = ({ placeholder, image, ...props }) => {
  return (
    <div className="mb-3 lg:w-[700px] md:w-[500px]">
      <div className="">
        <Dropzone {...props}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                    required
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

export default AdminFileUploader;
