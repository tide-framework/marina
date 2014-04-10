creation
createIndexPage
	indexPage := MRPage new.
	indexPage title: 'index'.
	indexPage contents: '! Marina
Marina is a CMS.'.
	indexPage template: self defaultTemplate.
	indexPage author: self adminUser.
	indexPage published: true.
	indexPage save.
	^ indexPage