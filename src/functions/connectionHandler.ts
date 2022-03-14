import { middyfy } from '@libs/middify'
import { APIGatewayEvent } from 'aws-lambda'

const connectionHandler = async (event: APIGatewayEvent) => {
	console.log(`New connection id=${event.requestContext.connectionId}`)

	return {
		statusCode: 200,
	}
}

export const handler = middyfy(connectionHandler)
