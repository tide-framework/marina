accessing
baseline: spec
	<baseline>
	spec
		for: #pharo
		do: [ 
			spec repository: 'github://tide-framework/marina:master'.
			self tideDependency: spec.
			self pillarDependency: spec.
			self voyageDependency: spec.
			self xmlWriterDependency: spec.
			spec package: 'Marina' with: [ spec requires: #('Tide' 'Pillar' 'Voyage' 'XMLWriter') ] ]