import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { z } from 'zod'

/**
 * Creates a new instance of the Fastify application.
 */
const app = fastify()

const prisma = new PrismaClient()

/**
 * GET route for retrieving indicators.
 *
 * @param request - The HTTP request object.
 * @param response - The HTTP response object.
 */
app.get('/indicators', async () => {
  const indicators = await prisma.indicadores.findMany()

  return { indicators }
})

/**
 * POST route for creating new indicators.
 *
 * @param request - The HTTP request object.
 * @param response - The HTTP response object.
 */
app.post('/indicators', async (request, reply) => {
  const createIndicatorSchema = z.object({
    createdAt: z.string(),
    position_x: z.string(),
    position_y: z.string(),
    position_z: z.string(),
    position_e: z.string(),
    temperatura_hotend: z.string(),
    setpoint_hotend: z.string(),
    temperatura_mesa: z.string(),
    setpoint_mesa: z.string(),
  })

  const {
    createdAt,
    position_x,
    position_y,
    position_z,
    position_e,
    temperatura_hotend,
    setpoint_hotend,
    temperatura_mesa,
    setpoint_mesa,
  } = createIndicatorSchema.parse(request.body)

  await prisma.indicadores.create({
    data: {
      createdAt,
      position_x,
      position_y,
      position_z,
      position_e,
      temperatura_hotend,
      setpoint_hotend,
      temperatura_mesa,
      setpoint_mesa,
    },
  })

  return reply.status(201).send()
})

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log('HTTP Server running')
  })
