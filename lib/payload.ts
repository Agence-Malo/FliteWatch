import { getPayload } from 'payload'
import config from '@payload-config'

const payload = async () => await getPayload({ config });

export default payload
