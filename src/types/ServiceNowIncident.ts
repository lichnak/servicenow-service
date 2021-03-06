export interface ServiceNowIncident {
  problem_id?: string;
  short_description?: string;
  x_320273_keptn_dem_remediation_url?: string;

  number?: number;
  state?: string;
  impact?: string;
  priority?: number;
  urgency?: number;
  category?: string;
  subcategory?: string;
  description?: string;
  comments?: string;
  assigned_to?: string;
  incident_state? : string;
  close_code? : string;
  close_notes? : string;
}
