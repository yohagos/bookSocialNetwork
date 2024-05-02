# Build stage
FROM openjdk:22-jdk AS build

CMD apt-get update && apt-get upgrade -y
CMD apt-get install maven -y

WORKDIR /build

COPY pom.xml .
CMD mvn dependency:go-offline

COPY /src ./src
CMD mvn clean package -DskipTests

# Runtime stage
FROM amazoncorretto:21

ARG PROFILE=dev
ARG APP_VERSION=1.0.0

CMD apt-get update && apt-get upgrade -y
CMD apt-get install maven -y && apt-get install openjdk-22-jdk -y

WORKDIR /app
COPY /build/target/*.jar /app/

EXPOSE 8088


ENV DB_URL=jdbc:postgresql://postgres-sql-bsn:5432/book_social_network
ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}

CMD java -jar -Dspring.profiles.active=${ACTIVE_PROFILE} \
    -Dspring.datasource.url=${DB_URL} social-network-${JAR_VERSION}.jar
