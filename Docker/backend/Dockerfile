# Build stage
#FROM openjdk:22-jdk AS build

#RUN apk --update --no-cache add maven
#RUN apk upgrade -y
#RUN apk install maven -y
#ENV MAVEN_VERSION 3.5.4
#ENV MAVEN_HOME /usr/lib/mvn
#ENV PATH $MAVEN_HOME/bin:$PATH

#RUN wget http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz && \
#  tar -zxvf apache-maven-$MAVEN_VERSION-bin.tar.gz && \
#  rm apache-maven-$MAVEN_VERSION-bin.tar.gz && \
#  mv apache-maven-$MAVEN_VERSION /usr/lib/mvn

# Build stage
FROM maven:latest AS build
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM amazoncorretto:17
ARG PROFILE=dev
ARG APP_VERSION=1.0.0

WORKDIR /app
COPY --from=build /build/target/book-network-*.jar /app/

# Extract the JAR version
RUN APP_VERSION=$(ls /app | grep *.jar | awk 'NR==2{split($0,a,"-"); print a[3]}' | awk '{sub(/.jar$/,"")}1')\
    && echo "Building container with BSN v-$version"
EXPOSE 8088

ENV DB_URL=jdbc:postgresql://postgres-sql-bsn:5432/book_social_network
ENV MAILDEV_URL=localhost

ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}

CMD java -jar -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL}  book-network-${JAR_VERSION}.jar