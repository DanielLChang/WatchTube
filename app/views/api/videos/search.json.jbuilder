json.array!(@videos) do |video|
  json.(video, *Video.column_names)
end
