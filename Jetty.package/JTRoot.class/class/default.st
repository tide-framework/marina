accessing
default
	^ JTRoot selectOne: [ :each | each name = self defaultName ]