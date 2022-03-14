import { middyfy } from '@libs/middify'
import {
	ApiGatewayManagementApiClient,
	PostToConnectionCommand,
} from '@aws-sdk/client-apigatewaymanagementapi'
import {} from '@serverless/typescript'
import { APIGatewayEvent } from 'aws-lambda'

const defaultHandler = async (event: APIGatewayEvent) => {
	console.log(`Default route id=${event.requestContext.connectionId}`)

	const client = new ApiGatewayManagementApiClient({
		endpoint: process.env.IS_OFFLINE
			? 'ws://localhost:3001'
			: process.env.APIG_ENDPOINT,
	})

	await client.send(
		new PostToConnectionCommand({
			ConnectionId: event.requestContext.connectionId,
			Data: JSON.stringify({ Hello: 'World!' }) as any,
		})
	)

	return {
		statusCode: 200,
	}
}

export const handler = middyfy(defaultHandler)
