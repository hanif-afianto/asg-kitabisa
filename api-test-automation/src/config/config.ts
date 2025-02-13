import * as yaml from 'js-yaml'
import * as fs from 'fs'

const config: any = yaml.load(fs.readFileSync(`./src/config/config.yaml`, 'utf8'))

export default {
  baseUrl: config.BASE_URL,
  userId: Number(config.USER_ID),
}