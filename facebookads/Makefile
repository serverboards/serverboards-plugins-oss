FILES = $(wildcard manifest.yaml *.py *.txt *.sh static/ *.md)
PACKAGE_ID = $(shell awk '/^id:/ {print $$2}' manifest.yaml)

.PHONY: txz
txz:
	@echo $(PACKAGE_ID).txz: $(FILES)
	@tar --transform 's#^#'$(PACKAGE_ID)'/#' -cJf $(PACKAGE_ID).txz ${FILES}
