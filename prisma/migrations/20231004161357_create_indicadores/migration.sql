-- CreateTable
CREATE TABLE "Indicadores" (
    "id" SERIAL NOT NULL,
    "createdAt" TEXT NOT NULL,
    "position_x" TEXT NOT NULL,
    "position_y" TEXT NOT NULL,
    "position_z" TEXT NOT NULL,
    "position_e" TEXT NOT NULL,
    "temperatura_hotend" TEXT NOT NULL,
    "setpoint_hotend" TEXT NOT NULL,
    "temperatura_mesa" TEXT NOT NULL,
    "setpoint_mesa" TEXT NOT NULL,

    CONSTRAINT "Indicadores_pkey" PRIMARY KEY ("id")
);
