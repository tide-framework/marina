creation
createIndexPage
	indexPage := MRPage new.
	indexPage title: 'index'.
	indexPage contents: '! Marina
Marina is a CMS.

You may want to have a look at the *documentation directory>documentation* or at the *documentation page>documentation/documentation*'.
	indexPage template: self defaultTemplate.
	indexPage author: self adminUser.
	indexPage published: true.
	indexPage save.
	^ indexPage