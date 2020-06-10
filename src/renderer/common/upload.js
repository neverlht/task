import axios from 'axios';
const Upload = {
  host: 'http://fairytale.oss-cn-hangzhou.aliyuncs.com',
  uploadFile(file, param, callback) {
    const formdata = new FormData();
    const fileNameDef = param.fileNameSuffix ? param.fileNameSuffix : new Date().getTime();
    const fileName = fileNameDef + file.name.substring(file.name.lastIndexOf('.'), file.name.length);
    formdata.append('filename', fileName);
    const key = param.dir + fileName;
    formdata.append('key', key);
    formdata.append('policy', param.policy);
    formdata.append('OSSAccessKeyId', param.accessid);
    formdata.append('success_action_status', '200');
    formdata.append('signature', param.signature);
    formdata.append('file', file);
    axios({
      url: this.host,
      method: 'post',
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
      callback(`${this.host}/${key}`);
    });
  },
};

export default Upload;
