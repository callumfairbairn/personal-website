push-to-master:
	git checkout master
	git merge dev
	git push
	git checkout dev

precommit:
	npm test
	npm run lint
