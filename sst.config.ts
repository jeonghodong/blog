/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "blog",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },

  async run() {
    new sst.aws.Nextjs("blog", {
      domain: {
        name: "jeonghodong.com",
        dns: sst.aws.dns({
          zone: "Z01396941E04LZORW1ORF",
        }),
      },
    });
  },
});

// S3 (3개)
// CloudFront
// Route 53
// ACM
// Lambda
// CloudWatch
// IAM
