FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md static/spice-html5/)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

.PHONY: static/spice-html5
static/spice-html5:
	git submodule init
	git submodule update

.PHONY: txz
txz: $(PACKAGE_ID).txz

$(PACKAGE_ID).txz: $(FILES)
	@echo $(PACKAGE_ID).txz: $(FILES)
	@tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
