versions
version010: spec
	<version: '0.1.0'>
	spec
		for: #common
		do: [ 
			spec blessing: #development.
			spec
				baseline: 'Marina' with: [ spec repository: 'github://tide-framework/marina:master' ];
				import: 'Marina' ]