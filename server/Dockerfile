FROM golang:1.18.3
ENV TZ=Asia/Tokyo

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
ENV ROOTPATH=/go/app

WORKDIR ${ROOTPATH}

RUN go install github.com/cosmtrek/air@v1.40.0

COPY go.mod go.sum .air.toml ./
# RUN go mod edit -module=websocket
# RUN go get websocket
# RUN go mod tidy
# RUN go mod download

EXPOSE 80
CMD ["air", "-c", ".air.toml"]