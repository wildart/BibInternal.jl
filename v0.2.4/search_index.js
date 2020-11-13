var documenterSearchIndex = {"docs":
[{"location":"utilities/","page":"Utilities","title":"Utilities","text":"","category":"page"},{"location":"utilities/","page":"Utilities","title":"Utilities","text":"Modules = [BibInternal]\nPages   = [\"constant.jl\", \"utilities.jl\"]","category":"page"},{"location":"utilities/#BibInternal.entries","page":"Utilities","title":"BibInternal.entries","text":"const entries = [\n    :article,\n    :book,\n    :booklet,\n    :inbook,\n    :incollection,\n    :inproceedings,\n    :manual,\n    :masterthesis,\n    :misc,\n    :phdthesis,\n    :proceedings,\n    :techreport,\n    :unpublished,\n]\n\nList of possible entries (currently based on bibtex). Keep it sorted for readability.\n\n\n\n\n\n","category":"constant"},{"location":"utilities/#BibInternal.fields","page":"Utilities","title":"BibInternal.fields","text":"const fields = [\n    :address,\n    :annote,\n    :archivePrefix,\n    :author,\n    :booktitle,\n    :chapter,\n    :crossref,\n    :edition,\n    :editor,\n    :eprint,\n    :howpublished,\n    :institution,\n    :journal,\n    :key,\n    :month,\n    :note,\n    :number,\n    :organization,\n    :pages,\n    :primaryClass,\n    :publisher,\n    :school,\n    :series,\n    :title,\n    :type,\n    :volume,\n    :year\n]\n\nList of possible fields (currently based on bibtex). Keep it sorted for readability\n\n\n\n\n\n","category":"constant"},{"location":"utilities/#BibInternal.maxfieldlength","page":"Utilities","title":"BibInternal.maxfieldlength","text":"const maxfieldlength\n\nFor output formatting purpose, for instance, export to BibTeX format.\n\n\n\n\n\n","category":"constant"},{"location":"utilities/#BibInternal.arxive_url-Tuple{Dict{String,String}}","page":"Utilities","title":"BibInternal.arxive_url","text":"arxive_url(fields::Fields)\n\nMake an arxiv url from an eprint entry. Work with both old and current arxiv BibTeX format.\n\n\n\n\n\n","category":"method"},{"location":"utilities/#BibInternal.erase_spaces-Tuple{String}","page":"Utilities","title":"BibInternal.erase_spaces","text":"erase_spaces(str::String)\n\nErase extra spaces, i.e. r\"[  ]+\", from str and return a new string.\n\n\n\n\n\n","category":"method"},{"location":"utilities/#BibInternal.get_delete!-Tuple{Dict{String,String},String}","page":"Utilities","title":"BibInternal.get_delete!","text":"get_delete!(fields::Fields, key::String)\n\nGet a the value of a field and delete it afterward.\n\n\n\n\n\n","category":"method"},{"location":"utilities/#BibInternal.space-Tuple{Symbol}","page":"Utilities","title":"BibInternal.space","text":"space(field::Symbol)\n\nReturn the amount of spaces needed to export entries, for instance to BibTeX format.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/","page":"BibTeX","title":"BibTeX","text":"","category":"page"},{"location":"bibtex/","page":"BibTeX","title":"BibTeX","text":"Modules = [BibInternal]\nPages   = [\"bibtex.jl\"]","category":"page"},{"location":"bibtex/#BibInternal.rules","page":"BibTeX","title":"BibInternal.rules","text":"const rules = Dict([\n    \"article\"       => [\"author\", \"journal\", \"title\", \"year\"]\n    \"book\"          => [(\"author\", \"editor\"), \"publisher\", \"title\", \"year\"]\n    \"booklet\"       => [\"title\"]\n    \"eprint\"        => [\"author\", \"eprint\", \"title\", \"year\"]\n    \"inbook\"        => [(\"author\", \"editor\"), (\"chapter\", \"pages\"), \"publisher\", \"title\", \"year\"]\n    \"incollection\"  => [\"author\", \"booktitle\", \"publisher\", \"title\", \"year\"]\n    \"inproceedings\" => [\"author\", \"booktitle\", \"title\", \"year\"]\n    \"manual\"        => [\"title\"]\n    \"masterthesis\"  => [\"author\", \"school\", \"title\", \"year\"]\n    \"misc\"          => []\n    \"phdthesis\"     => [\"author\", \"school\", \"title\", \"year\"]\n    \"proceedings\"   => [\"title\", \"year\"]\n    \"techreport\"    => [\"author\", \"institution\", \"title\", \"year\"]\n    \"unpublished\"   => [\"author\", \"note\", \"title\"]\n])\n\nList of BibTeX rules bases on the entry type. A field value as a singleton represents a required field. A pair of values represents mutually exclusive required fields.\n\n\n\n\n\n","category":"constant"},{"location":"bibtex/#BibInternal.check_entry-Tuple{Dict{String,String}}","page":"BibTeX","title":"BibInternal.check_entry","text":"check_entry(fields::Fields)\n\nCheck the validity of the fields of a BibTeX entry.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/#BibInternal.make_bibtex_entry-Tuple{String,Dict{String,String}}","page":"BibTeX","title":"BibInternal.make_bibtex_entry","text":"make_bibtex_entry(id::String, fields::Fields)\n\nMake an entry if the entry follows the BibTeX guidelines. Throw an error otherwise.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Entries","title":"Entries","text":"","category":"page"},{"location":"","page":"Entries","title":"Entries","text":"Modules = [BibInternal]\nPages   = [\"BibInternal.jl\", \"entry.jl\"]","category":"page"},{"location":"#BibInternal.AbstractEntry","page":"Entries","title":"BibInternal.AbstractEntry","text":"abstract type AbstractEntry end\n\nAbstract Entry supertype.\n\n\n\n\n\n","category":"type"},{"location":"#BibInternal.Fields","page":"Entries","title":"BibInternal.Fields","text":"Fields = Dict{String, String}\n\nStores the fields (name => value) of an entry.\n\n\n\n\n\n","category":"type"},{"location":"#BibInternal.Access","page":"Entries","title":"BibInternal.Access","text":"struct Access\n    doi::String\n    howpublished::String\n    url::String\nend\n\nStore the online access of an entry as a String. Handles the fields doi and url and the arXiV entries. For additional fields or entries, please fill an issue or make a pull request.\n\n\n\n\n\n","category":"type"},{"location":"#BibInternal.Access-Tuple{Dict{String,String}}","page":"Entries","title":"BibInternal.Access","text":"Access(fields::Fields)\n\nConstruct the online access information based on the entry fields.\n\n\n\n\n\n","category":"method"},{"location":"#BibInternal.Date","page":"Entries","title":"BibInternal.Date","text":"struct Date\n    day::String\n    month::String\n    year::String\nend\n\nStore the date information as day, month, and year.\n\n\n\n\n\n","category":"type"},{"location":"#BibInternal.Date-Tuple{Dict{String,String}}","page":"Entries","title":"BibInternal.Date","text":"Date(fields::Fields)\n\nConstruct the date information based on the entry fields.\n\n\n\n\n\n","category":"method"},{"location":"#BibInternal.Entry","page":"Entries","title":"BibInternal.Entry","text":"struct Entry <: AbstractEntry\n    access::Access\n    authors::Names\n    booktitle::String\n    date::Date\n    editors::Names\n    eprint::Eprint\n    id::String\n    in::In\n    fields::Dict{String,String}\n    title::String\n    type::String\nend\n\nGeneric Entry type. If some construction rules are required, it should be done beforehand. Check bibtex.jl as the example of rules implementation for BibTeX format.\n\n\n\n\n\n","category":"type"},{"location":"#BibInternal.Entry-Tuple{String,Dict{String,String}}","page":"Entries","title":"BibInternal.Entry","text":"Entry(id::String, fields::Fields)\n\nConstruct an entry with a unique id and a list of Fields.\n\n\n\n\n\n","category":"method"},{"location":"#BibInternal.Eprint","page":"Entries","title":"BibInternal.Eprint","text":"struct Eprint\n    archive_prefix::String\n    eprint::String\n    primary_class::String\nend\n\nStore the information related to arXiv eprint format.\n\n\n\n\n\n","category":"type"},{"location":"#BibInternal.Eprint-Tuple{Dict{String,String}}","page":"Entries","title":"BibInternal.Eprint","text":"Eprint(fields::Fields)\n\nConstruct the eprint arXiv information based on the entry fields. Handle old and current arXiv format.\n\n\n\n\n\n","category":"method"},{"location":"#BibInternal.In","page":"Entries","title":"BibInternal.In","text":"struct In\n    address::String\n    chapter::String\n    edition::String\n    institution::String\n    journal::String\n    number::String\n    organization::String\n    pages::String\n    publisher::String\n    school::String\n    series::String\n    volume::String\nend\n\nStore all the information related to how an entry was published.\n\n\n\n\n\n","category":"type"},{"location":"#BibInternal.In-Tuple{Dict{String,String}}","page":"Entries","title":"BibInternal.In","text":"In(fields::Fields)\n\nConstruct the information of how an entry was published based on its fields\n\n\n\n\n\n","category":"method"},{"location":"#BibInternal.Name-Tuple{String}","page":"Entries","title":"BibInternal.Name","text":"Name(str::String)\n\nDecompose without ambiguities a name as particle (optional) last, junior (optional), first middle (optional) based on BibTeX possible input. As for BibTeX, the decomposition of a name in the form of first last is also possible, but ambiguities can occur.\n\n\n\n\n\n","category":"method"},{"location":"#BibInternal.names-Tuple{String}","page":"Entries","title":"BibInternal.names","text":"names(str::String)\n\nDecompose into parts a list of names in BibTeX compatible format. That is names sparated by and.\n\n\n\n\n\n","category":"method"}]
}
