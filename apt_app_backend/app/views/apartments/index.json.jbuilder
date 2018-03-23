json.array! @apartments do |apartment|
  json.street_1 apartment.street_1
  json.street_2 apartment.street_2
  json.city apartment.city
  json.state apartment.state
  json.postal_code apartment.postal_code
  json.country apartment.country
  json.name apartment.name
  json.phone_number apartment.phone_number
  json.contact_hours apartment.contact_hours
  json.avatar asset_url(apartment.avatar.url(:med))
end
