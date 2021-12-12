import SampleUtil from "~/server/common/sample-util";

let counter = 0
export default () => {
  counter++

  async function sample () {
    const sampleUtil = new SampleUtil();
    return await sampleUtil.test()
  }

  sample().then()

  return JSON.stringify(counter)
}