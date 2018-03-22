json.array! @apartments do |apartment|
  json.name apartment.name
  json.age apartment.age
  json.enjoys apartment.enjoys
  json.avatar asset_url(apartment.avatar.url(:large))
end
