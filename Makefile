# docker-compose.ymlでvolumeに設定しているパスがsrc以下にしている為、go.modとgo.sumはコンテナから共有されない
# 仮にbuildして、コンテナ内でgo.modにモジュールを追加してものをコピペして、コンテナを作り直すという流れがよいかもしれない・・・
# 下記でwebsocketモジュールを追加可能
RUN go mod edit -module=websocket
RUN go get websocket
RUN go mod tidy
RUN go mod download

go get github.com/go-redis/redis/v8redis
go mod tidy
go mod download