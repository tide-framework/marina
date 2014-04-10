creation
createIndexPage
	indexPage := MRPage new.
	indexPage title: 'index'.
	indexPage contents: 'Welcome to Marina'.
	indexPage template: self defaultTemplate.
	indexPage author: self adminUser.
	indexPage published: true.
	indexPage save.
	^ indexPage