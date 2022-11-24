const config = {
  // app:{
  //     port : 4000
  // },
  // db : {
  //     host : '0.0.0.0',
  //     port:27017,
  //     dbname:'studynode'
  // }

  app: {
    port: 4000,
    DB: "mongodb+srv://root:root@nnod-demo.vxhqqut.mongodb.net/NodeSampleDB?retryWrites=true&w=majority",
  }
};

module.exports = config;
