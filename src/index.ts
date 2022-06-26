export namespace encoding {
    
    /** Hex string, contains only 0-9, A-F, a-f characters. Could start with 0x prefix. Length can be odd, if so and you want to convert it to buffer, add 0 at the beginning. */
    export type Hex = string&{__opq_encoding_hex: never};
    
    /** Base32 string, described in RFC 4648 */
    export type Base32 = string&{__opq_encoding_base32: never};
    
    /** Base64 string, described in RFC 4648 */
    export type Base64 = string&{__opq_encoding_base64: never};
    
    /** Base58 string */
    export type Base58 = string&{__opq_encoding_base58: never};
    
    /** Binary string, every character represent one byte */
    export type Binary = string&{__opq_encoding_binary: never};
    
    /** Represents number as decimal string */
    export type Decimal = string&{__opq_encoding_decimal: never};
    
    /** Represents number as octal string. Could start with 0 prefix. */
    export type Octal = string&{__opq_encoding_octal: never};
    
    /** Represents number as string of bits */
    export type Bit = string&{__opq_encoding_bits: never};
}

export namespace geo {
    
    /** Country code ISO 3166-1 alpha-2 */
    export type CountryCode = string&{__opq_geo_countryCode: never};
    
    /** Country code ISO 3166-1 alpha-3 */
    export type CountryCode3 = string&{__opq_geo_countryCode3: never};
    
    /** Country name */
    export type Country = string&{__opq_geo_country: never};
    
    /** State name */
    export type State = string&{__opq_geo_state: never};
    
    /** Region name */
    export type Region = string&{__opq_geo_region: never};
    
    /** Province name */
    export type Province = string&{__opq_geo_province: never};
    
    /** City name */
    export type City = string&{__opq_geo_city: never};
    
    /** Post code */
    export type PostCode = string&{__opq_geo_postCode: never};
    
    /** Address */
    export type Address = string&{__opq_geo_address: never};
    
    /** Street name */
    export type Street = string&{__opq_geo_street: never};
    
    /** Street number */
    export type StreetNumber = string&{__opq_geo_streetNumber: never};
    
    /** Bulding number */
    export type BuildingNumber = string&{__opq_geo_buildingNumber: never};
    
    /** Apartment number */
    export type ApartmentNumber = string&{__opq_geo_apartmentNumber: never};
    
    /** Longitude */
    export type Longitude = number&{__opq_geo_longitude: never};
    
    /** Latitude */
    export type Latitude = number&{__opq_geo_latitude: never};
}

export namespace misc {
    
    /** Alias for "OK" string */
    export type OK = "OK";
    
    /** Alias for "ok" string */
    export type ok = "ok";
}

export namespace net {
    
    /** Email address string */
    export type Email = string&{__opq_net_email: never};
    
    /** URL (Uniform Resource Locator) string */
    export type URL = string&{__opq_net_url: never};
    
    /** IP v4 address string */
    export type IPv4Address = string&{__opq_net_ipv4Address: never};
    
    /** IP v6 address string */
    export type IPv6Address = string&{__opq_net_ipv6Address: never};
    
    /** IP v4/v6 address string */
    export type IPAddress = IPv4Address|IPv6Address;
    
    /** Domain string */
    export type Domain = string&{__opq_net_domain: never};
    
    /** Hostname string, it is an IP address or a domain, must not include port */
    export type Hostname = IPAddress|Domain;
    
    /** Host string, it is a hostname with optional port */
    export type Host = Hostname|(string&{__opq_net_host: never});
    
    /** TCP/UDP port number */
    export type Port = number&{__opq_net_port: never};
}

export namespace time {
    
    /** The number of miliseconds that have elapsed since the Unix epoch */
    export type Timestamp = number&{__opq_time_timestamp: never};
    
    /** The number of seconds that have elapsed since the Unix epoch */
    export type UnixTimestamp = number&{__opq_time_unixTimestamp: never};
    
    /** The number of microseconds that have elapsed since the Unix epoch */
    export type MicroTimestamp = number&{__opq_time_microTimestamp: never};
    
    // ========================================
    
    /** Year */
    export type Year = number&{__opq_time_year: never};
    
    /** Month (1-12) */
    export type Month = number&{__opq_time_month: never};
    
    /** Week (1-53) */
    export type Week = number&{__opq_time_week: never};
    
    /** Day of month (1-31) */
    export type Day = number&{__opq_time_day: never};
    
    /** Day of week (0-6). Sunday=0, Monday=1, Tuesday=2, Wednesday=3, Thursday=4, Friday=5, Saturday=6 */
    export type DayOfWeek = number&{__opq_time_dayOfWeek: never};
    
    /** Hour (0-23) */
    export type Hour = number&{__opq_time_hour: never};
    
    /** Minute (0-59) */
    export type Minute = number&{__opq_time_minute: never};
    
    /** Second (0-59) */
    export type Second = number&{__opq_time_second: never};
    
    /** Milisecond (0-999) */
    export type Milisecond = number&{__opq_time_milisecond: never};
    
    /** Microsecond (0-999999) */
    export type Microsecond = number&{__opq_time_microsecond: never};
    
    // ========================================
    
    /** The number of years */
    export type Years = Year|(number&{__opq_time_years: never});;
    
    /** The number of months */
    export type Months = number&{__opq_time_months: never};
    
    /** The number of weeks */
    export type Weeks = number&{__opq_time_weeks: never};
    
    /** The number of days */
    export type Days = number&{__opq_time_days: never};
    
    /** The number of hours */
    export type Hours = Hour|(number&{__opq_time_hours: never});
    
    /** The number of minutes */
    export type Minutes = Minute|(number&{__opq_time_minutes: never});
    
    /** The number of seconds */
    export type Seconds = Second|(number&{__opq_time_seconds: never});
    
    /** The number of miliseconds */
    export type Miliseconds = Milisecond|(number&{__opq_time_miliseconds: never});
    
    /** The number of microseconds */
    export type Microseconds = Microsecond|(number&{__opq_time_microsecond: never});
    
    // ========================================
    
    /** The number of miliseconds */
    export type Timespan = Miliseconds;
    
    /** The number of seconds */
    export type UnixTimespan = Seconds;
    
    /** The number of microseconds */
    export type MicroTimespan = Microsecond;
}
