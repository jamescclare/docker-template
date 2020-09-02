APP_NAME = app

clean:
	rm -rf docker/app/src

dockerise:
	make clean
	npx copyfiles ./src ./docker/app \
		-e node_modules build ssl.cert ssl.key
	docker build -f docker/app/Dockerfile -t ${APP_NAME} .
		# --build-arg NPM_TOKEN=${NPM_TOKEN}