creation
createIndexPage
	indexPage := MRPage new.
	indexPage title: 'index'.
	indexPage contents: '! Marina
Marina is a CMS. You now have a nice website and *a blog>Yet another blog*.

You may want to have a look at the *documentation page>documentation/documentation*'.
	indexPage template: self defaultTemplate.
	indexPage published: true.
	indexPage save.
	^ indexPage