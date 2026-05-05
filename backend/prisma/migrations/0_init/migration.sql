-- CreateExtension
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "drivers" (
    "id" UUID NOT NULL,
    "vehicle_model" VARCHAR(100),
    "vehicle_plate" VARCHAR(20),
    "is_available" BOOLEAN DEFAULT false,
    "current_location" geography,
    "rating" DECIMAL(3,2) DEFAULT 5.0,
    "is_on_trip" BOOLEAN DEFAULT false,

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ride_tracking" (
    "id" BIGSERIAL NOT NULL,
    "ride_id" UUID NOT NULL,
    "coords" geography NOT NULL,
    "recorded_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ride_tracking_pkey" PRIMARY KEY ("id","recorded_at")
);

-- CreateTable
CREATE TABLE "rides" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "rider_id" UUID,
    "driver_id" UUID,
    "status" VARCHAR(20) DEFAULT 'requested',
    "pickup_location" geography NOT NULL,
    "dropoff_location" geography NOT NULL,
    "pickup_address" TEXT,
    "dropoff_address" TEXT,
    "estimated_fare" DECIMAL(10,2),
    "actual_fare" DECIMAL(10,2),
    "surge_multiplier" DECIMAL(3,2) DEFAULT 1.0,
    "distance_meters" INTEGER,
    "requested_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accepted_at" TIMESTAMPTZ(6),
    "started_at" TIMESTAMPTZ(6),
    "ended_at" TIMESTAMPTZ(6),
    "cancelled_at" TIMESTAMPTZ(6),
    "cancellation_reason" TEXT,
    "otp" VARCHAR(4),

    CONSTRAINT "rides_pkey" PRIMARY KEY ("id","requested_at")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "full_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" VARCHAR(10),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "drivers_vehicle_plate_key" ON "drivers"("vehicle_plate");

-- CreateIndex
CREATE INDEX "idx_driver_location" ON "drivers" USING GIST ("current_location");

-- CreateIndex
CREATE INDEX "idx_tracking_ride_id" ON "ride_tracking"("ride_id");

-- CreateIndex
CREATE INDEX "idx_rides_driver" ON "rides"("driver_id");

-- CreateIndex
CREATE INDEX "idx_rides_rider" ON "rides"("rider_id");

-- CreateIndex
CREATE INDEX "idx_rides_status" ON "rides"("status");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rides" ADD CONSTRAINT "rides_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rides" ADD CONSTRAINT "rides_rider_id_fkey" FOREIGN KEY ("rider_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

