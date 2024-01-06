PROJECT_NAME := test-bootstrap-theme

install:
	$(MAKE) npm-install

serve:
	$(MAKE) npm-serve

build:
	$(MAKE) npm-build

lint:
	djlint --reformat public/index.html
